import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, TextField } from 'material-ui';
import { NavLink, Link } from 'react-router-dom'

class CreatePost extends Component {
    render() {
        var postId, title, desc, price, category, src;
        var isDemand = false;
        desc = ".";
        category = "기타";
        src = "";
        price = "미정";

        return (
            <MuiThemeProvider>

                <TextField floatingLabelText="제목" onChange={function (e, text) {
                    title = text
                }} /><br />

                <TextField floatingLabelText="상세 설명" onChange={function (e, text) {
                    desc = text
                }} /><br />

                <TextField floatingLabelText="희망 가격" onChange={function (e, text) {
                    price = text
                }} /><br />

                <TextField floatingLabelText="카테고리" onChange={function (e, text) {
                    category = text
                }} /><br />

                <NavLink exact to={'/'}>
                    <RaisedButton label="방 개설" onClick={function () {
                        if (title == undefined) {
                            window.alert('다시 입력하세요!');
                        }
                        console.log(title, desc, price, category);
                    }.bind(this)} />
                </NavLink>
            </MuiThemeProvider>
        );
    }
}

export default CreatePost;
