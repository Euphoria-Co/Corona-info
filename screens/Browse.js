import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity, 
  View, 
  TextInput,
  TouchableHighlight
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

import DropDownBonus from 'drop-down-bonus';
import HTMLView from 'react-native-htmlview';

const { width } = Dimensions.get("window");
var { clicButt } = true;
var HashMap = require('hashmap');


class Browse extends Component {
	
  constructor(props) {
    super(props)
    this.state = { buttonId: null, stateOfButtons: new HashMap() }
  }

  onPress = id => {
	if(this.state.stateOfButtons.get(id)) {this.state.stateOfButtons.set(id, false)}
	else {this.state.stateOfButtons.set(id, true)}
	if(this.state.buttonId === id) {this.setState({ buttonId: null })} 
	else {this.setState({ buttonId: id })}
    this.state.clickedButton ? clicButt = false  : clicButt = true;
  }
  
  state = {
    active: "Podstawowe informacje",
    categories: [],
	  clickedButton: false
  };

  UNSAFE_componentDidMount() {
    this.setState({ categories: this.props.categories });
  }
  

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;
    const tabs = ["Products", "Inspirations", "Shop"];

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  UNSAFE_componentWillMount(){
    this.handleTab("Podstawowe informacje");
}

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;

    return (
      
      <Block>
        
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Block flex={false} row style={styles.tabs}>
            {mocks.tabs.map(tab => this.renderTab(tab))}
          </Block>
        </ScrollView>
        
	
        {/*<Button onPress={() => navigation.navigate("Settings")}>
		<Image source={{uri: profile.avatar}} style={styles.avatar} />
          </Button>*/}
       
		
	    	<Block flex={false} row center space="between" style={styles.header}>
          <Text h2 bold>{"Dowiedz się więcej na temat COVID-19"}</Text>
          
        
        
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
		  
            {mocks.virusInfos.map(virusInfo => (
				
				      <View key={virusInfo.id}>
					      <DropDownBonus
						      pressedActionButton={this.onPress}
						      id={virusInfo.id}
						      contentVisible={false}
						      header={	  
							      <Card center middle shadow style={(this.state.stateOfButtons.get(virusInfo.id)) ?  styles.buttonEn : styles.buttonDi}>
								    	<Text center medium height={18}> 
											{virusInfo.name}
									    </Text>
      							</Card>
			    			  }
					      >
						      <HTMLView
							      value={virusInfo.data}
							      stylesheet={styles.data}
							      style={styles.data}
							      key={virusInfo.id}
						      />
					      </DropDownBonus>
				      </View>
            ))}


          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 2,
    paddingBottom: theme.sizes.base*2,
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  buttonDi: {
    // this should be dynamic based on screen width
  	borderWidth: 1,
	  borderColor: theme.colors.secondary,
   	backgroundColor: theme.colors.white,
  	color: theme.colors.black,
    minWidth: (width - theme.sizes.padding *2 - theme.sizes.base),
  	
    
  },
  buttonEn: {
    // this should be dynamic based on screen width
  	borderWidth: 1,
   	borderColor: theme.colors.white,
  	backgroundColor: theme.colors.accent,
  	color: theme.colors.white,
    minWidth: (width - theme.sizes.padding * 2 - theme.sizes.base),
  	
  },
  data: {
    maxWidth: (width - theme.sizes.base * 5 - theme.sizes.base),
  },
  bold: {
	  fontWeight: 'bold'
  },
  italic: {
	  fontStyle: 'italic'
  },
  underline: {
	  textDecorationLine: 'underline'
  }
});

const stylesHTML = StyleSheet.create({
	p: {
		fontWeight: 'normal',
	},
});

