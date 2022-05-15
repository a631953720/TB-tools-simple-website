import axios from 'axios';

import { SERVER } from '../constant/env';

const { TBToolHost } = SERVER;

const router = {
  user: {
    autoLoginTenant: 'TB/user/autoLoginTenant',
  },
  device: {
    getDeviceList: 'TB/device/list',
  },
};

type AutoLoginTenantRes = {
  refreshToken: string;
  systemAdminEmail: string;
  tenantAdminName: string;
  tenantEmail: string;
  token: string;
};

export function autoLoginTenant() {
  return axios.get<AutoLoginTenantRes>(`${TBToolHost}/${router.user.autoLoginTenant}`);
}

type DeviceInfo = {
  status: number;
  deviceList: Array<{
    id: string;
    name: string;
    type: string;
    label: string;
    createdTime: number;
    token: string;
  }>;
};

type GetDeviceListRes = {
  status: number;
  deviceList: Array<DeviceInfo>;
  totalElements: number;
};

export function getDeviceList() {
  return axios.get<GetDeviceListRes>(`${TBToolHost}/${router.device.getDeviceList}`);
}
