import React from "react";
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';

let styles = {
    titleNotice: {
      color : '',
      fontWeight: 'bold'
    }
    // titleVod : {
    //     color : 'blue',
    // }
};

class Title extends React.Component {
    render(){
        const { title, notice, color, classes } = this.props;
        styles.titleNotice.color = color !== '' ? color : 'black'
        return(
            <div>
                {title} 
                
                <div 
                    style = {{
                        ...styles.titleNotice
                    }}
                >
                    {notice}
                </div>
            </div>
        )
    }
}

export default Title;
