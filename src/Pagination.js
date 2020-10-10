import { Pagination } from 'react-bootstrap';
import React, { Component } from 'react'

export default class CustomPagination extends Component {
    render() {
        const { currentPage,totalRows,noOfItemsinPage } =this.props;
        let items = [];
        let number = (totalRows/noOfItemsinPage) - currentPage > 5 ? currentPage : (totalRows/noOfItemsinPage)-5;
        console.log(number);
        for (let i = number; i <= number+5 ; i++) {
        items.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={()=>this.props.changePage(i)}>
            {i}
            </Pagination.Item>
        );
        }
        return (
            <Pagination className="m-4">
                <Pagination.First onClick={()=>this.props.changePage(1)}/>
                <Pagination.Prev onClick={()=>this.props.changePage(currentPage-1)}/>
                {items}
                {
                    currentPage+5 === totalRows/noOfItemsinPage ?
                    <> 
                        <Pagination.Next onClick={()=>this.props.changePage(currentPage+1)}/>
                        <Pagination.Last onClick={()=>this.props.changePage(totalRows/noOfItemsinPage)}/>
                    </> :''
                }
                
            </Pagination>
        )
    }
}

