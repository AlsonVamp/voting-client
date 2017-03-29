import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';
import Winner from './Winner';

export default class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>;
    }
};