import { ReadPath } from "./RUDPath"
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "antd"

export const BreadcrumbItemsGenerator = () => {
    // Read Current Path
    const paths = ReadPath()

    // Params
    const { id } = useParams()
    
    // Path Defined
    const dashboard = JSON.stringify(['/'])
    const device = JSON.stringify(['device'])
    const deviceDetails = JSON.stringify(['device', 'details'])
    const deviceUpdate = JSON.stringify(['device', 'update'])
    const deviceCreate = JSON.stringify(['device', 'create'])
    const service = JSON.stringify(['service'])
    const progression = JSON.stringify(['progression'])
    const report = JSON.stringify(['report'])
    const role = JSON.stringify(['role'])
    const account = JSON.stringify(['account'])
    const log = JSON.stringify(['log'])
    const profile = JSON.stringify(['profile'])

    // Path To Breadcrumb Item
    const breadcrumbItems = [] as React.ReactNode[]

    // Navigate
    const navigate = useNavigate()

    // Handle Button OnClick
    const handleButtonOnClick = (path:string) => {
        navigate(path)
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
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/device/details/${id}`)}>Chi tiết thiết bị</Button>)
            break;
        case deviceUpdate:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/device')}>Danh sách thiết bị</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick(`/device/update/${id}`)}>Cập nhật thiết bị</Button>)
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
        case progression:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cấp số</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/progression')}>Danh sách cấp số</Button>)
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
        case account:
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('#')}>Cài đặt hệ thống</Button>)
            breadcrumbItems.push(
                <Button type="text" className='text-btn' onClick={() => handleButtonOnClick('/account')}>Quản lý tài khoản</Button>)
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