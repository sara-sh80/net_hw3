import React, {Component} from 'react';
import TableCompStyle from "../Css/TableCompStyle.css"

class TableComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            field: "",
            name: "",
            date: "",
            title: "",

        }
    }

    componentDidMount() {
         fetch('/data.json')
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok!');
                }
                return response.json();
            })
            .then(jsonData => this.setState({ data: jsonData }))
            .catch(error => this.setState({ error: error.message }))
    }

    fieldChangeHandler = (event) =>{
        this.setState({
            field : event.target.value
        })
    }
     titleChangeHandler = (event) =>{
        this.setState({
            title : event.target.value
        })
    }
     dateChangeHandler = (event) =>{
        this.setState({
            date : event.target.value
        })
    }
     nameChangeHandler = (event) =>{
        this.setState({
            name: event.target.value
        })
    }


    render() {
        const {page_id} = this.props
        const field = this.state.field
        const name = this.state.name
        const date = this.state.date
        const title = this.state.title
        let filteredInp = name ? this.state.data.filter(item => item.name.includes(name)) : this.state.data;
        filteredInp = field ? filteredInp.filter(item => item.field.includes(field)) : filteredInp;
        filteredInp = field ? filteredInp.filter(item => item.field.includes(field)) : filteredInp;
        const slicedArray = filteredInp.slice((page_id - 1) * 20, page_id * 20);
        if (this.state.error) {
            return <div>Error: {this.state.error}</div>;
        }
        return (
            <div>
                   <div className="container-inp">
                       <label htmlFor="">
                           <input type="search" id="inp-1" value={this.state.data.name} onChange={this.nameChangeHandler}/>
                           نام تغییر دهنده
                       </label>
                       <label htmlFor="">
                           <input type="search" id="inp-2" value={this.state.data.date} onChange={this.dateChangeHandler}/>
                           تاریخ
                       </label>
                       <label htmlFor="">
                           <input type="search" id="inp-3" value={this.state.data.title} onChange={this.titleChangeHandler}/>
                           نام اگهی
                       </label>
                       <label htmlFor="">
                           <input type="search" id="inp-4" value={this.state.data.field} onChange={this.fieldChangeHandler}/>
                           فیلد
                       </label>
                   </div>
                <table>
                    <tr>
                        <th>مقدار قدیمی</th>
                        <th>مقدار جدید</th>
                        <th>فیلد</th>
                        <th>نام اگهی</th>
                        <th>تاریخ</th>
                        <th>نام تغییر دهنده</th>
                    </tr>
                    {slicedArray.map( item => (
                        <tr key={item.id}>
                            <td>{item.new_value}</td>
                            <td>{item.old_value}</td>
                            <td>{item.field}</td>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default TableComp;