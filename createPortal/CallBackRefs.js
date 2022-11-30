
import React, {Component} from 'react';

class CallBackRefs extends Component {

	constructor(props) {
			super(props)
			this.cbRef=null
			this.setCbRef=element=> {
				this.cbRef=element
			}
		}

		componentDidMount() {
			if (this.cbRef) {
				this.cbRef.focus()
			}
		}
		clickHandler=()=>{
			alert(this.inputRef.current.value)
		}


		

	render() {
		return(
			<div >
				<input type="text" ref={this.setCbRef}/>
				<button onClick={this.clickHandler}> Click</button>
			</div>
			)
	}
}
export  default CallBackRefs;