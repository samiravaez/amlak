import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-dashboard',
    label: 'menu.dashboards',
    to: `${adminRoot}/dashboards`,
    subs: [
      {
        label: 'menu.main',
        to: `${adminRoot}/dashboards/main`,
      },
    ]
  },
  {
    id: 'Blogs',
    icon: 'iconsminds-pen-2',
    label: 'menu.blogs',
    to: `${adminRoot}/blogs`,
    // roles: [UserRole.Admin, UserRole.Editor],
    permission: ['operators.create', 'operators.list', 'operators.edit'],
    subs: [
      {
        label: 'menu.blogs.list',
        to: `${adminRoot}/blogs/list`,
        // roles: [UserRole.Admin],
        permission: ['operators.list'],
      },
      {
        label: 'menu.blogs.create',
        to: `${adminRoot}/blogs/create`,
        // roles: [UserRole.Admin],
        permission: ['operators.create'],
      },
      {
        label: 'menu.blogs.listone',
        to: `${adminRoot}/blogs/category/list`,
        // roles: [UserRole.Admin],
        permission: ['operators.list'],
      },
      {
        label: 'menu.blogs.createtwo',
        to: `${adminRoot}/blogs/tags/list`,
        // roles: [UserRole.Admin],
        permission: ['operators.create'],
      }
    ],
  },
  {
    id: 'sheet',
    icon: 'iconsminds-letter-open',
    label: 'menu.sheet',
    to: `${adminRoot}/sheet`,
    // roles: [UserRole.Admin, UserRole.Editor],
    permission: ['customers.create', 'customers.list', 'customers.edit'],
    subs: [
      {
        label: 'menu.sheet.list',
        to: `${adminRoot}/sheet/list`,
        // roles: [UserRole.Admin],
        permission: ['customers.list'],
      },
      {
        label: 'menu.sheet.create',
        to: `${adminRoot}/sheet/create`,
        // roles: [UserRole.Admin],
        permission: ['customers.create'],
      },
    ],
  },
  {
    id: 'crm',
    icon: 'iconsminds-shop-2',
    label: 'menu.crm',
    to: `${adminRoot}/crms`,
    permission: ['shops.create', 'shops.list', 'shops.edit'],
    subs: [
      {
        label: 'menu.crm.dashboard',
        to: `${adminRoot}/crms/dashboard`,
        permission: ['shops.list'],
      },
      {
        label: 'menu.crm.customers',
        to: `${adminRoot}/crms/customers`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.inquiry',
        to: `${adminRoot}/crms/inquiry`,
        permission: ['shops.list'],
      },
      {
        label: 'menu.crm.visits',
        to: `${adminRoot}/crms/visits`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.activities',
        to: `${adminRoot}/crms/activities`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.salesOpportunity',
        to: `${adminRoot}/crms/salesOpportunity`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.requestCampaign',
        to: `${adminRoot}/crms/requestCampaign`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.documents',
        to: `${adminRoot}/crms/documents`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.accounting',
        to: `${adminRoot}/crms/accounting`,
        permission: ['shops.create'],
      },
      {
        label: 'menu.crm.crmSettings',
        to: `${adminRoot}/crms/crmSettings`,
        permission: ['shops.create'],
      },

    ]
  },
{
    id: 'ads',
    icon: 'iconsminds-digital-drawing',
    label: 'menu.pages',
    to: `${adminRoot}/ads`,
    permission: ['developer'],
    subs: [
      {
        label: 'menu.login',
        to: `${adminRoot}/ads/all`,
      },
      {
        label: 'menu.register',
        to: `${adminRoot}/ads/myAdd`,
      },
      {
        label: 'menu.forgot-password',
        to: `${adminRoot}/ads/waiting`,
      },
      {
        label: 'menu.reset-password',
        to: `${adminRoot}/ads/add`,
      },
      {
        label: 'menu.forgot-passwordone',
        to: `${adminRoot}/ads/archive`,
      },
      {
        label: 'menu.reset-passwordtwo',
        to: `${adminRoot}/ads/trash`,
      },
    ],
  },
  {
    id: 'adsSetting',
    icon: 'iconsminds-equalizer',
    label: 'menu.adsSetting',
    to: `${adminRoot}/adsSetting`,
    permission: ['developer'],
    subs: [
      {
        label: 'menu.type',
        to: `${adminRoot}/adsSetting/typeTransaction`,
      },
      {
        label: 'menu.components',
        to: `${adminRoot}/adsSetting/typeProperty`,
      },
      {
        label: 'menu.welfare',
        to: `${adminRoot}/adsSetting/welfare`,
      },
      {
        label: 'menu.important',
        to: `${adminRoot}/adsSetting/important`,
      },
    ],
  },
  {
    id: 'ui',
    icon: 'iconsminds-video-tripod',
    label: 'menu.ui',
    to: `${adminRoot}/ui`,
    permission: ['developer'],
    subs: [
      {
        label: 'menu.layouts',
        to: `${adminRoot}/ui/forms/layouts`,
      },
      {
        label: 'menu.components',
        to: `${adminRoot}/ui/forms/components`,
      },
    ],
  },
  {
    id: 'menu',
    icon: 'iconsminds-speach-bubble-dialog',
    label: 'menu.menu',
    to: `${adminRoot}/menu`,
    permission: ['developer'],
    subs: [
      {
        label:'menu.menu',
        to: `${adminRoot}/menu/types`,
      }
    ]
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-business-man-woman',
    label: 'menu.blank-page',
    to: `${adminRoot}/users`,
    permission: ['developer'],
    subs: [
      {
        label: 'simpleLabelOne',
        to: `${adminRoot}/users/all`,
      },
      {
        label: 'simpleLableTwo',
        to: `${adminRoot}/users/addcustomer`,
      },
      {
        label: 'simpleLabelThree',
        to: `${adminRoot}/users/rolemanagement`,
      },
      {
        label: 'simpleLableFour',
        to: `${adminRoot}/users/addrole`,
      },
      {
        label: 'simpleLabelFive',
        to: `${adminRoot}/users/access`,
      },
      {
        label: 'simpleLableSix',
        to: `${adminRoot}/users/addaccess`,
      },
    ],
  },
  {
    id: 'docs',
    icon: 'iconsminds-office',
    label: 'menu.docs',
    to: `${adminRoot}/menu`,
    permission: ['developer'],
    subs: [
      {
        label: 'docsLabelOne',
        to: ""
      },
      {
        label: 'docsLableTwo',
        to: ""
      },
      {
        label: 'docsLabelThree',
        to: ""
      },
      {
        label: 'docsLableFour',
        to: ""
      },
    ],
  },
  {
    id: 'setting',
    icon: 'simple-icon-settings',
    label: 'setting.docs',
    to: `${adminRoot}/menu`,
    permission: ['developer'],
    subs: [
      {
        label: 'settingLabelOne',
        to: ""
      },
      {
        label: 'settingLableTwo',
        to: ""
      },
    ],
  },
];
export default data;
