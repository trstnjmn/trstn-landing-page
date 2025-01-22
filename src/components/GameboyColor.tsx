
const GameboyColor = () => {
    return (
        <div className="gameboy" id="GameBoy" >

            <div className="screen-area">

                <div className="power">
                    <div className="indicator">
                        <div className="led"></div>
                        <span className="arc" ></span>
                        <span className="arc" ></span>
                        <span className="arc"></span>
                    </div>
                    POWER
                </div>

                <canvas className="display" id="mainCanvas"></canvas>

                <div className="label">
                    <div className="title">GAME BOY</div>

                </div>

            </div>

            <div className="nintendo">Nintendo</div>

            <div className="controls">
                <div className="dpad">
                    <div className="up"><i className="fa fa-caret-up"></i></div>
                    <div className="right"><i className="fa fa-caret-right"></i></div>
                    <div className="down"><i className="fa fa-caret-down"></i></div>
                    <div className="left"><i className="fa fa-caret-left"></i></div>
                    <div className="middle"></div>
                </div>
                <div className="a-b">
                    <div className="b">B</div>
                    <div className="a">A</div>
                </div>
            </div>

            <div className="start-select">
                <div className="select">SELECT</div>
                <div className="start">START</div>
            </div>

            <div className="speaker">
                <div className="dot placeholder"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot placeholder"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot placeholder"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot placeholder"></div>
            </div>

        </div>

    );
};

export default GameboyColor;
