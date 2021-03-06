/* 2020-04-18 15:38 태형 수정 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

// axios: REST API로 서버에 데이터를 전송하는 모듈
const axios = require('axios').default;

class CreateDemandPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            createdUserID: '',
            postCategoryID: '',
            nego: '',
            imgSrc: 'www',
            description: '',
            demandPostTitle: '',
            demandPostLocation: '',
            demandPostPrice: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    

    // submit 버튼을 눌렀을 때의 이벤트 핸들러
    handleFormSubmit(e){
        e.preventDefault();
        this.addDemandPost();
    }

    // 폼에 한 글자 한글자가 입력될 때의 이벤트 핸들러
    handleValueChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);  
    }


    // post방식으로 서버에 응답하여 data를 전송 
    addDemandPost(){
        console.log(this.state);
        const url = '/api/demandpost';
        var data = {
            createdUserID: this.state.createdUserID,
            postCategoryID: Number(this.state.postCategoryID),
            nego: Number(this.state.nego),
            imgSrc: this.state.imgSrc,
            description: this.state.description,
            demandPostTitle: this.state.demandPostTitle,
            demandPostLocation: this.state.demandPostLocation,
            demandPostPrice: Number(this.state.demandPostPrice)
        };
        axios.post(url, data);
    }
    
    // 제출 양식
    render() {
        this.state.createdUserID = this.props.userID;
        return (
            <div>
                <form onSubmit = {this.handleFormSubmit}>
                    <p>
                        <input type='text' name='demandPostTitle' value = {this.state.demandPostTitle} placeholder='제목을 입력하세요' onChange={this.handleValueChange} />
                    </p>
                    <p>
                        <input type='text' name='description' value = {this.state.description} placeholder='내용을 입력하세요' onChange={this.handleValueChange} />
                    </p>
                    <p>
                        <input type='text' name='demandPostPrice' value = {this.state.demandPostPrice} placeholder='가격을 입력하세요' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <input type='text' name='demandPostLocation' value = {this.state.demandPostLocation} placeholder='위치를 입력하세요' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <input type='text' name='nego' value = {this.state.nego} placeholder='네고 가능 여부를 알려주세요(0, 1)' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <input type='text' name='postCategoryID' value = {this.state.postCategoryID} placeholder='카테고리 아이디를 입력하세요(숫자)' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <button type='submit'>빌려주세요</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default connect(
    function(state){
        return{
            userID : state.currentUserID   
        }
    }
)(CreateDemandPost);
