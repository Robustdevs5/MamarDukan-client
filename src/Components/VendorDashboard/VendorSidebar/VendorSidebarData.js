import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/vendor/dashboard/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

  },
  {
    title: 'Customers',
    path: '',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Customers Overview',
        path: '/vendor/dashboard/customers-overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Customers',
        path: '/vendor/dashboard/customers',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Products Overview',
        path: '/vendor/dashboard/products-overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Products',
        path: '/vendor/dashboard/products',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Product',
        path: '/vendor/dashboard/addProduct',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Orders',
    path: '',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Order Overview',
        path: '/dashboard/overview/order-overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Order Review',
        path: '/dashboard/overview/orders',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: 'vendor/dashboard/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Messages',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message',
        path: 'vendor/dashboard/messages/',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
