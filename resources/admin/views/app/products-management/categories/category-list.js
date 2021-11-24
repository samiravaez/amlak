import React, {Suspense} from "react";
import {
    Card, CardBody, CardSubtitle, CardTitle,
    DropdownItem, DropdownMenu, DropdownToggle,
    Row, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody,
    Table,
    FormGroup, Button
} from "reactstrap";
import {Colxx, Separator} from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import TableAjax from "../../../../components/TableAjax";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import useAttributesList from "../../../../hooks/search_attribute";
import SearchMultiSelect from "../../../../components/SearchMultiSelect";
import {Formik, Form, Field} from 'formik';
import {adminPathApi, adminRoot} from "../../../../constants/defaultValues";


const CategoryList = ({match, ...props}) => {
    let history = useHistory()
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [pageCount, setPageCount] = React.useState(0)
    const [group_attributes_modal, setGroupAttributesModal] = React.useState(false);
    const [group_attributes_subs_modal, setGroupAttributesSubsModal] = React.useState(false);
    const [category_group_attributes, setCategoryGroupAttributes] = React.useState({id: ''});
    const [group_attributes_list, setGroupAttributesList] = React.useState([]);
    const [init_attributes, setInitAttributes] = React.useState({title: '', attributes: []});
    const [edit_group, setEditGroup] = React.useState(false);

    const [exceptAttr, setExceptAttr, search, setSearch, options] = useAttributesList();

    // const onAttrSelectChange = (name,values,setField) => {
    //   setExceptAttr(values);
    //   setField(name,values);
    // }

    const getAttr = (setloadOptions, search1 = '') => {
        setSearch(search1);
        setloadOptions(options);
    }

    React.useEffect(async () => {
        if (category_group_attributes.id) {
            await axios
                .get(`${adminPathApi}/category/${category_group_attributes.id}/group_attributes`)
                .then(res => res.data)
                .then(data => {
                    setGroupAttributesList(data.data)
                    setExceptAttr(data.attributes);
                })
        }
    }, [category_group_attributes.id])

    const editAttribute = (id) => {
        axios
            .get(`${adminPathApi}/group-attribute/${id}`)
            .then(res => res.data)
            .then(data => {
                setInitAttributes({title: data.title, attributes: data.attributes});
                setEditGroup(id);
                setGroupAttributesSubsModal(true)
            })

    }

    const Actions = ({id}) => {
        return (
            <UncontrolledButtonDropdown tag={'a'}>
                <DropdownToggle color="secondary" outline>
                    <i className={'simple-icon-options-vertical'}/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => history.push(`edit/${id}`)}>
                        ویرایش
                    </DropdownItem>
                    <DropdownItem onClick={() => history.push(`addForm/${id}`)}>
                        ویرایش فرم
                    </DropdownItem>
                    <DropdownItem onClick={() => history.push(`showAds/${id}`)}>
                        مشاهده ی آگهی ها
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        );
    };

    const cols = React.useMemo(
        () => [
            {
                Header: 'نام دسته بندی',
                accessor: 'title',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'نامک',
                accessor: 'slug',
                cellClass: 'text-muted',
                Cell: (props) => <>{props.value}</>,
            },
            // {
            //   Header: 'والد',
            //   accessor: 'id',
            //   cellClass: 'text-muted text-center',
            //   Cell: (props) => (<Actions id={props.value} name={props.row.original.name}/>),
            // },
            {
                Header: 'گزینه ها',
                accessor: '_id',
                cellClass: 'text-muted',
                Cell: (props) => (<Actions id={props.value}/>),
            },


        ],
        []
    );
    //const tableInstance = useTable({ columns, data })
    const fetchData = React.useCallback(async ({pageSize, pageIndex}) => {
            await axios.get(`${adminPathApi}/category/show?page=${pageIndex + 1}&per_page=${pageSize}`)
                .then((res) => {
                    setData(res.data.data);
                    setPageCount(res.data.last_page);
                    return res
                })
                .catch((error) => error)
        }
        , []);

    const saveGroup = (values) => {
        let request_source;
        if (edit_group) {
            request_source = `${adminPathApi}/group-attribute/${edit_group}/edit`;
        } else {
            request_source = `${adminPathApi}/group-attribute/${category_group_attributes.id}/create`;
        }
        axios
            .post(request_source, values)
            .then(res => res.data)
            .then(data => {
                if (data.status) {
                    setGroupAttributesList(data.data)
                    setExceptAttr(data.attributes)
                    setGroupAttributesSubsModal(false)
                }
            })
    }


    return (
        <Suspense fallback={<div className={'loading'}/>}>
            <Row>
                <Colxx xss="12">
                    <Breadcrumb heading={"menu.categories.list"} match={match}/>
                    <Link className={"mx-1"} to={"create"}>
                        <span className={"simple-icon-plus"}/>
                    </Link>
                    <Separator className="mb-5"/>
                </Colxx>
            </Row>
            <Colxx>
                <Card className="mb-4">
                    <CardBody>
                        <TableAjax columns={cols} data={data} fetchData={fetchData} loading={loading}
                                   pageCount={pageCount}/>
                    </CardBody>
                </Card>
            </Colxx>
            <Modal size="xl" isOpen={group_attributes_modal}
                   toggle={() => setGroupAttributesModal(!group_attributes_modal)}>
                <ModalHeader>
                    {category_group_attributes.name}
                    <span className="simple-icon-plus mx-2" onClick={() => {
                        setEditGroup(false);
                        setGroupAttributesSubsModal(true);
                        setInitAttributes({title: '', attributes: []})
                    }}></span>
                </ModalHeader>
                <ModalBody>
                    <Table striped>
                        <thead>
                        <th>عنوان</th>
                        <th>ویژگی ها</th>
                        <th>عملیات</th>
                        </thead>
                        <tbody>
                        {group_attributes_list.map(group => (
                            <tr>
                                <td>{group.title}</td>
                                <td>{group.attributes.map(function (obj) {
                                    return obj['name'];
                                }).join(' | ')}</td>
                                <td>
                                    <Button color="secondary" outline onClick={() => {
                                        editAttribute(group.id);
                                    }}>
                                        <span className="far fa-edit"></span>
                                    </Button>
                                    <Button color="danger" outline className="mx-1">
                                        <span className="far fa-trash-alt"></span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </ModalBody>
            </Modal>
            <Modal size="xs" isOpen={group_attributes_subs_modal}
                   toggle={() => setGroupAttributesSubsModal(!group_attributes_subs_modal)}>
                <ModalHeader>{edit_group ? 'ویرایش ویژگی گروهی' : 'افزودن ویژگی گروهی'}</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={init_attributes}
                        enableReinitialize
                        onSubmit={(values) => {
                            saveGroup(values)
                        }}
                    >
                        {({errors, touched, setFieldValue, setFieldTouched, values}) => (
                            <Form>
                                <FormGroup>
                                    <label>عنوان گروه</label>
                                    <Field name="title" className="form-control"/>
                                </FormGroup>
                                <FormGroup>
                                    <label>لیست ویژگی ها</label>
                                    <SearchMultiSelect name="attributes" value={values.attributes ?? []}
                                                       request={getAttr} onChange={setFieldValue}/>
                                </FormGroup>
                                <Button type="submit">
                                    ذخیره
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </Suspense>
    )
};

export default CategoryList;

