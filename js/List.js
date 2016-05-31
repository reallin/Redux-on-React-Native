

import  {

	View,
	ListView,
	TextInput,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	ActivityIndicatorIOS,
	StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
const fullWidth = Dimensions.get('window').width;



export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: null,
			placeholder: '写下你的todo'
		}
	}

	 componentDidMount() {
	 	const { loadTodos } = this.props.actions;
	 	loadTodos();
	 }

	appendTodoList() {
		const text = this.state.text;
		const { appendTodo } = this.props.actions;
		appendTodo(text);
		this.setState({ text: null });
	}

	renderHeader() {
		return (
			<View style={styles.todoRow}>
				<TextInput
					value={this.state.text}
					placeholder={this.state.placeholder}
					onChangeText={(text) => this.setState({ text })}
					style={styles.inputText} />

				<TouchableOpacity onPress={this.appendTodoList.bind(this)} style={styles.button}>
					<Text style={styles.buttonText}>添加</Text>
				</TouchableOpacity>

			</View>
		);
	}

	renderRow(dataRow) {
		const { selectTodo } = this.props.actions;
		return (
			//console.log(dataRow);
			<View style={styles.todoRow}>
				<Text style={ styles.todoText}>{dataRow.text}</Text>
			</View>

		)
	}

	renderList() {
		const { todo } = this.props.state;
		return (
			<ListView
				style={styles.container}
				dataSource={todo.dataSource}
				renderHeader={this.renderHeader.bind(this)}
				renderRow={this.renderRow.bind(this)} />
		);
	}

	loading() {
		return (
			<Text style={styles.viewFlex} >loading…………</Text>
		);
	}

	render() {
		const { todo } = this.props.state;
		const { loadTodos } = this.props.actions;
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

			{ todo.type != 'INITIAL_TODOS' ? this.renderList() : this.loading() }
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	todoRow: {
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: fullWidth,
		height: 40,
		borderBottomColor: '#EEEEEE',
		borderBottomWidth: 1,
	},
	todoText: {
		fontSize: 16,
		color: '#666666',
	},

	viewFlex:{

		fontSize:20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	success: {
		color: 'green',
	},
	pendding: {
		color: 'blue',
	},
	inputText: {
		height: 40,
		width: (fullWidth-20)*0.8,
		borderBottomColor: '#EEEEEE',
		borderBottomWidth: 1,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: (fullWidth - 20)*0.2,
		backgroundColor: '#EEEEEE',
		padding: 10,
	}
});
