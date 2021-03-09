import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="group-box-left">
                <div className="click">
                    <img src={this.props.stateGame.banChon.hinhAnh} width={"100%"} />
                </div>
                <div className="option-click">
                    {this.props.stateGame.mangOanTuTi.map((item, index) => {
                        return <button className="ml-4"><img src={item.hinhAnh} width={30} /></button>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateGame: state.gameReducer
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps,mapDispatchToProps)(Player)