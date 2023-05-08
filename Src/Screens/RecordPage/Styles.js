import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: Colors.backgroundColor
	},
	headerContainer: {
		flex: 0.1,
		justifyContent: 'center'
	},
	headerWrapper: {
		width: widthScreen / 1.15,
		alignSelf: 'center'
	},
	mainContainer: {
		flex: 0.72,
		justifyContent: 'center'
	},
	mainWrapper: {
		width: widthScreen / 1.35,
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: hp(4),
	},
	bottomContainer: {
		flex: 0.28,
		justifyContent: 'flex-end',
	},
	bottomWrapper: {
		width: widthScreen / 1.15,
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: hp(2)
	},
	loginText: {
		fontSize: hp(3.2),
		fontWeight: '700',
		textAlign: 'center',
		color: Colors.lightBlue,
	},
	descriptionText: {
		fontSize: hp(2.2),
		fontWeight: '400',
		textAlign: 'center',
		color: Colors.white,
		textAlign: 'center',
		marginTop: 15
	},

	userRound: {
		backgroundColor: Colors.mediumBlack,
		width: 70,
		height: 70,
		borderRadius: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconUser: {
		width: 40,
		height: 40,
		borderRadius: 40,
		tintColor: Colors.lightBlue,
		// marginTop: 8
	},
	countDownWrap: {
		marginTop: hp(5),
		alignItems: 'center',
		justifyContent: 'center'
	},
	countInner: {
		backgroundColor: Colors.mediumBlack,
		width: 200,
		height: 200,
		borderRadius: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	prayerText: {
		fontSize: hp(2.5),
		fontWeight: '400',
		textAlign: 'center',
		color: Colors.white,
		marginTop: hp(3)
	},
	clockIcon: {
		width: 30,
		height: 30,
		tintColor: Colors.white,
		// marginTop: 8
	},
	folderIcon: {
		width: 30,
		height: 30,
		tintColor: Colors.white,
		// marginTop: 8
	},
	recordRoundButton: {
		backgroundColor: Colors.mediumBlack,
		width: 150,
		height: 150,
		borderRadius: 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordInner: {
		backgroundColor: "#d1582c",
		width: 90,
		height: 90,
		borderRadius: 90,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordText: {
		fontSize: hp(2.5),
		fontWeight: '500',
		textAlign: 'center',
		color: Colors.white,
	}

});
export default styles;