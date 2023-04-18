import { ReadPath } from "./RUDPath"
import React from "react"
import { useNavigate, NavigateOptions } from "react-router-dom"
import { Button } from "antd"
import { useLocation } from 'react-router-dom';

/* Function: Generate Breadcrumb Based On URL */
export const BreadcrumbItemsGenerator = () => {
    // Read Current Path
    const paths = ReadPath()

    // use Location Hook
    const location = useLocation();
    
    // Path Defined

    /* Dashboard */
    const dashboard = JSON.stringify(['/'])

    /* Device */
    const device = JSON.stringify(['device'])
    const deviceDetails = JSON.stringify(['device', 'details', `${location.state?.deviceId}`])
    const deviceUpdate = JSON.stringify(['device', 'update', `${location.state?.deviceId}`])
    const deviceCreate = JSON.stringify(['device', 'create'])

    /* Service */
    const service = JSON.stringify(['service'])
    const serviceDetails = JSON.stringify(['service', 'details', `${location.state?.serviceId}`])
    const serviceUpdate = JSON.stringify(['service', 'update', `${location.state?.serviceId}`])
    const serviceCreate = JSON.stringify(['service', 'create'])

    /* Progression */
    const progression = JSON.stringify(['progression'])
    const progressionDetails = JSON.stringify(['progression', 'details', `${location.state?.progressionId}`])
    const progressionCreate = JSON.stringify(['progression', 'create'])

    /* Report */
    const report = JSON.stringify(['report'])

    /* Role */
    const role = JSON.stringify(['role'])
    const roleCreate = JSON.stringify(['role', 'create'])
    const roleUpdate = JSON.stringify(['role', 'update', `${location.state?.roleId}`])

    /* Account */
    const account = JSON.stringify(['account'])
    const accountCreate = JSON.stringify(['account', 'create'])
    const accountUpdate = JSON.stringify(['account', 'update', `${location.state?.userId}`])

    /* Log */
    const log = JSON.stringify(['log'])

    /* Profile */
    const profile = JSON.stringify(['profile'])

    // Path To Breadcrumb Item
    const breadcrumbItems = [] as React.ReactNode[]

    // Navigate
    const navigate = useNavigate()

    // Handle Button OnClick
    const handleButtonOnClick = (path:string, options?:NavigateOptions) => {
        navigate(path, options)
    }

    switch(JSON.stringify(paths))
    {
        case dashboard:
            breadcrumbItems.push(
            <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/')}>Dashboard</Button>)
            break;
        case device:
            breadcrumbItems.push(
            <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Thiết bị</Button>)
            breadcrumbItems.push(
            <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/device')}>Danh sách thiết bị</Button>)
            break;
        case deviceDetails:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/device')}>Danh sách thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/device/details/${location.state?.deviceId}`, {
                    state: {
                        deviceId: location.state?.deviceId
                    }
                })}>Chi tiết thiết bị</Button>)
            break;
        case deviceUpdate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/device')}>Danh sách thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/device/update/${location.state?.deviceId}`, {
                    state: {
                        deviceId: location.state?.deviceId
                    }
                })}>Cập nhật thiết bị</Button>)
            break;
        case deviceCreate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/device')}>Danh sách thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/device/create`)}>Thêm thiết bị</Button>)
            break;
        case service:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/service')}>Danh sách dịch vụ</Button>)
            break;
        case serviceDetails:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/service')}>Danh sách dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/service/details/${location.state?.serviceId}`, {
                    state: {
                        serviceId: location.state?.serviceId
                    }
                })}>Chi tiết dịch vụ</Button>)
            break;
        case serviceUpdate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/service')}>Danh sách dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/service/update/${location.state?.serviceId}`, {
                    state: {
                        serviceId: location.state?.serviceId
                    }
                })}>Cập nhật dịch vụ</Button>)
        break;
        case serviceCreate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/service')}>Danh sách dịch vụ</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/service/create`)}>Thêm dịch vụ</Button>)
        break;
        case progression:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/progression')}>Danh sách cấp số</Button>)
        break;
        case progressionDetails:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/progression')}>Danh sách cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/progression/details/${location.state?.progressionId}`, {
                    state: {
                        progressionId: location.state?.progressionId
                    }
                })}>Chi tiết cấp số</Button>)
        break;
        case progressionCreate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/progression')}>Danh sách cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/progression/create`)}>Cấp số mới</Button>)
        break;
        case report:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Báo cáo</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/report')}>Lập báo cáo</Button>)
            break;
        case role:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/role')}>Quản lý vai trò</Button>)
            break;
        case roleCreate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/role')}>Quản lý vai trò</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/role/create')}>Thêm vai trò</Button>)
            break;
        case roleUpdate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/role')}>Quản lý vai trò</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/role/update/${location.state?.roleId}`, {
                    state: {
                        roleId: location.state?.roleId
                    }
                })}>Cập nhật vai trò</Button>)
            break;
        case account:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/account')}>Quản lý tài khoản</Button>)
            break;
        case accountCreate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/account')}>Quản lý tài khoản</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/account/create')}>Thêm tài khoản</Button>)
        break;
        case accountUpdate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/account')}>Quản lý tài khoản</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/account/update/${location.state?.userId}}`, {
                    state: {
                        userId: location.state?.userId
                    }
                })}>Cập nhật tài khoản</Button>)
        break;
        case log:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/log')}>Nhật ký hoạt động</Button>)
            break;
        case profile:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/profile')}>Thông tin cá nhân</Button>)
            break;
        default:
    }

    return breadcrumbItems
}