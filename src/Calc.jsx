import React, { Component } from 'react'
import "./Css/myStyle.css"

export default class Calc extends Component {
    constructor() {
        super()
        this.state = {
            name: "0.00USD",
            name1: "0.00USD"
        }
    }
    // NO need to show input values on console. 

    getData(e) {
        if (e.target.name == "name")
            this.setState({ name: e.target.value })
        else if (e.target.name == "name1")
            this.setState({ name1: e.target.value })
    }
    render() {
        return (
            <>
                <div className='center'>
                    <div className='row'>

                        <p className='cal'>ROI Calculator</p>
                        <div className="cross">&times;</div>

                        <div className='ca_us'>
                            <p className='cake'>CAKE</p>
                            <p className='usd'>USD</p>
                        </div>

                        <input className='form form-control mb-2' name="name" type="text" onChange={(e) => this.getData(e)} value={this.state.name} ></input>

                        <div className='box'>
                            <div id='box1'>USE BALANCE</div>
                            <div id='box2'>$1000</div>
                            <div id='box3'>$100</div>
                        </div>

                        <p id='tFrame'>Timeframe</p>

                        <div className='Time'>
                            <div id='time1'>1 Day</div>
                            <div id='time2'>7 Days</div>
                            <div id='time3'>30 Days</div>
                            <div id='time4'>1 Year</div>
                            <div id='time5'>5 Year</div>
                        </div>

                        <p className='APY'>Enable Accelerated APY<span><label class="switch"><input type="checkbox" />
                            <span class="slider round"></span>
                        </label></span>
                        </p>

                        <p id="Stier">Select Tier</p>

                        <div className='Tier'>
                            <div id='tier1'>Tier1</div>
                            <div id='tier2'>Tier2</div>
                            <div id='tier3'>Tier3</div>
                            <div id='tier4'>Tier4</div>
                            <div id='tier5'>Tier5</div>
                        </div>

                        <p id="ROI">ROI at Current Rates</p>

                        <input className='form form-control mb-2' type="text" name="name1" onChange={(e) => this.getData(e)} value={this.state.name1} ></input>

                        <p id="C_K">~ 0.000 CAKE+ 0.000000 DON</p>

                        <div className='button'>
                            <button className='btn col-md-5 bg-dark text-light Abtn'>Apply</button>
                            <button className='btn btn-outline-dark bg-light text-dark col-md-5 Cbtn'>Cancel</button>
                        </div>

                        <a href='#demo' className='mt-3 text-center text-dark' data-toggle="collapse">Hide Details <span><i className="fa fa-angle-up" style={{ fontSize: "20px" }}></i></span></a>

                        <div className="collapse mt-2" id="demo">
                            <div className='Hidden-content'>
                                <p className='hidden_text'>APY</p>
                                <p className='hidden_no'>9.0 %</p>
                            </div>
                            <ul>
                                <li>Calculated Based on current rates.</li>
                                <li>All figures are estimates provided for your convenience only,
                                    and by no means represent guaranted returns.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
