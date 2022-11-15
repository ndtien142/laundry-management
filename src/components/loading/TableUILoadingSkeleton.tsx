import { Badge, IconButton, Menu, MenuButton, MenuItem, MenuList, Skeleton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TableUILoadingSkeleton = () => {
    return (
        <TableContainer
            bgColor='#FFF'
            my='5'
            borderRadius='10'
            as='section'
            overflowY='auto'
            maxHeight='480px'
        >
            <Table variant='simple' overflow='auto' height='100px'>
                <Thead position='sticky' top={0} bgColor='#FFF' zIndex='10'>
                    <Tr>
                        <Th>Mã đơn hàng</Th>
                        <Th>Tên khách hàng</Th>
                        <Th>Trạng thái</Th>
                        <Th>Ngày nhận đơn</Th>
                        <Th>Chỉnh sửa/Xoá</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                        <Td><Skeleton height="20px">
                        </Skeleton></Td>
                        <Td>
                            <Skeleton height="20px">
                            </Skeleton>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableUILoadingSkeleton