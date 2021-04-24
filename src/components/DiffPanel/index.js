import React, { Component } from 'react';
import { Collapse } from 'antd';
import "./index.css"

const { Panel } = Collapse;
const text = `
  Тут будет описание проблемы
`;

class DiffPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className = "DiffPanel">
                <Collapse>
                    <Panel header="Текст" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="Контент" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="Стили" key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
 
export default DiffPanel;