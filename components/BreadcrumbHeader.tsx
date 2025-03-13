'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from './ui/breadcrumb'
import { MobileSidebar } from './Sidebar'

const BreadcrumbHeader = () => {
	const pathName = usePathname()
	const path = pathName === '/' ? [''] : pathName?.split('/')
	return (
		<div className='flex items-center flex-start'>
			<MobileSidebar />
			<Breadcrumb>
				<BreadcrumbList>
					{path.map((path, index) => (
						<>
							<BreadcrumbItem>
								<BreadcrumbLink
									className='capitalize'
									href={`/${path}`}>
									{path === '' ? 'home' : path}
								</BreadcrumbLink>
							</BreadcrumbItem>
						</>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	)
}

export default BreadcrumbHeader
