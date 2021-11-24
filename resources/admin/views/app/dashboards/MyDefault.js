import React from 'react';
import { Row, Card, CardBody, CardTitle, Table } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { PolarAreaChart } from '../../../components/charts';
import { ThemeColors } from '../../../helpers/ThemeColors';

const colors = ThemeColors();

const polarAreaChartData = {
  labels: ['تایید شده', 'رد شده', 'در انتظار تایید'],
  datasets: [
    {
      data: [80, 90, 70],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
    },
  ],
};

const MyDefault = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboard" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="6" md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle id="cardtitles">
                <IntlMessages id="dashboards.product-categories" />
              </CardTitle>
              <div className={"dashboard-donut-chart"}>
                <PolarAreaChart shadow data={polarAreaChartData} />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx lg="6" md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle id="cardtitles">
                <IntlMessages id="dashboard.product-categories" />
              </CardTitle>
              <div className={"dashboard-donut-chart"}>
                <PolarAreaChart shadow data={polarAreaChartData} />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="6">
          <Card className="mb-4">
            <CardBody>
              <CardTitle id="seccondCardTitle">
                آگهی های جدید
              </CardTitle>
              <Table hover>
                <thead>
                  <tr>
                    <th>تاریخ</th>
                    <th>ثبت شده</th>
                    <th>در انتظار تایید</th>
                    <th>تایید شده</th>
                    <th>رد شده</th>
                    <th>ویژه</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">امروز</th>
                    <td>۰</td>
                    <td>۰</td>
                    <td><span class={'text-success'}>۰</span></td>
                    <td><span class={'text-danger'}>۰</span></td>
                    <td><span class={'text-info'}>۰</span></td>
                  </tr>
                  <tr>
                    <th scope="row">این هفته</th>
                    <td>۲۵</td>
                    <td>۴</td>
                    <td><span class={'text-success'}>۲۷</span></td>
                    <td><span class={'text-danger'}>۰</span></td>
                    <td><span class={'text-info'}>۱</span></td>
                  </tr>
                  <tr>
                    <th scope="row">این ماه</th>
                    <td>۹۵</td>
                    <td>۵</td>
                    <td><span class={'text-success'} id="green">۱۰۷</span></td>
                    <td><span class={'text-danger'} >۰</span></td>
                    <td><span class={'text-info'}>۳</span></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6">
          <Card className="mb-4">
            <CardBody>
              <CardTitle id="seccondCardTitle">
                آگهی های به روز شده
              </CardTitle>
              <Table hover>
                <thead>
                  <tr>
                    <th>تاریخ</th>
                    <th>ثبت شده</th>
                    <th>در انتظار تایید</th>
                    <th>تایید شده</th>
                    <th>رد شده</th>
                    <th>ویژه</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">امروز</th>
                    <td>۰</td>
                    <td>۰</td>
                    <td><span class={'text-success'}>۰</span></td>
                    <td><span class={'text-danger'}>۰</span></td>
                    <td><span class={'text-info'}>۰</span></td>
                  </tr>
                  <tr>
                    <th scope="row">این هفته</th>
                    <td>۲۵</td>
                    <td>۴</td>
                    <td><span class={'text-success'}>۲۷</span></td>
                    <td><span class={'text-danger'}>۰</span></td>
                    <td><span class={'text-info'}>۱</span></td>
                  </tr>
                  <tr>
                    <th scope="row">این ماه</th>
                    <td>۹۵</td>
                    <td>۵</td>
                    <td><span class={'text-success'} id="green">۱۰۷</span></td>
                    <td><span class={'text-danger'} >۰</span></td>
                    <td><span class={'text-info'}>۳</span></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
}
export default MyDefault;
