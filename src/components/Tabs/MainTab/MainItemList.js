import React, { Component } from 'react';
import axios from 'axios';
import ItemLists from "./itemlist/list";
import './Main.css';

class MainItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'life',
            ItemList: []
        }
    }
    componentDidMount() {
        this._getList();
    }
    _getList() {
        const apiUrl = '/data/dummy/ItemList.json'; // 나중에 src/data/dummy/ItemList.json 절대경로로 수정하기
        console.log(apiUrl, "getList");

        axios.get(apiUrl)
            .then(data => { //가지고 온 리스트를 저장
                console.log(apiUrl, "saved");
                this.setState({
                    ItemList: data.data.ItemList,
                    category: 'life'
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        var items = [];
        var demandItems = [];
        var supplyItems = [];
        items = this.state.ItemList.filter(item => (
            item.category === this.state.category
        ))
        demandItems = items.filter(item => (
            item.isDemand
        ))
        supplyItems = items.filter(item => (
            !item.isDemand
        ))
        return (
            <div class='main_wrap'>
                <div class='main'>
                    <div class='list_text'>빌려주세요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ</div>
                    <div id='demands'>
                        <ItemLists list={demandItems} />
                    </div>
                    <div class='list_text'>빌려가세요~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                    <div id='supplies'>
                        <ItemLists list={supplyItems} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainItemList;