import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle ,Line,Path} from 'react-native-svg'; // Importing Svg and Circle from react-native-svg

const Home = () => {
  const Number = "IBAn123456789";//just a variable for the actual Number
  const amount = "R12345";//just a variable for the actual amounts
  const currency = "Eur";//just a variable for the actual currency
  return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
      <Text style={styles.boxOne}>
        <Svg
          height={18}
          width={18}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="8" cy="8" r="4" fill={"gold"} />
          <Circle cx="24" cy="8" r="4" fill={"gold"} />
          <Circle cx="8" cy="24" r="4" fill={"gold"} />
          <Circle cx="24" cy="24" r="4" fill={"gold"} />
        </Svg>
      </Text>
      <Text style={styles.boxTwo}>OverView</Text>
      <Text style={styles.boxThree}>
        <Svg
          height={25}
          width={25}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Line
            x1="4"
            y1="8"
            x2="28"
            y2="8"
            stroke={"gold"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <Line
            x1="10"
            y1="16"
            x2="22"
            y2="16"
            stroke={"gold"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      </Text>
    </View>

    {/* New Section for Account */}
    <View style={styles.newSection1}>
      <Text style={styles.newSectionText}>Account</Text>
      <Text style={styles.currency}>{currency}</Text>
    </View>
    <View style={styles.newSection}>
      <View style={styles.accountContainer}>
        <Svg
          style={styles.icon}
          height={18}
          width={18}
          viewBox="0 0 487.6 487.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path d="M460.3,216.55h-11.6v-69.7c0-28.5-23.2-51.6-51.6-51.6h-10.7l0.1-25.9c0-19.2-15.6-34.8-34.8-34.8H42.3c-23.1,0-42,18.6-42.3,41.7c0,0.2,0,0.4,0,0.6v341.4c0,19.2,15.6,34.8,34.8,34.8h362.4c28.5,0,51.6-23.2,51.6-51.6v-69.8h11.6c15,0,27.2-12.2,27.2-27.2v-60.7C487.5,228.75,475.3,216.55,460.3,216.55z M42.3,58.55h309.4c5.9,0,10.8,4.8,10.8,10.7l-0.1,26H42.3c-10.1,0-18.3-8.2-18.3-18.3S32.2,58.55,42.3,58.55z M424.7,401.35c0,15.2-12.4,27.6-27.6,27.6H34.7c-5.9,0-10.8-4.8-10.8-10.8v-303.1c5.6,2.7,11.8,4.2,18.4,4.2h354.8c15.2,0,27.6,12.4,27.6,27.6v69.7h-81.9c-15,0-27.2,12.2-27.2,27.2v60.7c0,15,12.2,27.2,27.2,27.2h81.9V401.35z M463.5,304.45c0,1.8-1.4,3.2-3.2,3.2H342.9c-1.8,0-3.2-1.4-3.2-3.2v-60.7c0-1.7,1.4-3.2,3.2-3.2h117.4c1.7,0,3.2,1.4,3.2,3.2L463.5,304.45L463.5,304.45z" />
        </Svg>
        <Text style={styles.card}>Business Account</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Text style={styles.idNum}>{Number}</Text>
    </View>

    <View style={[styles.newSection, styles.Line]}>
      <View style={styles.accountContainer}>
        <Svg
          style={styles.icon}
          height={18}
          width={18}
          viewBox="0 0 487.6 487.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path d="M460.3,216.55h-11.6v-69.7c0-28.5-23.2-51.6-51.6-51.6h-10.7l0.1-25.9c0-19.2-15.6-34.8-34.8-34.8H42.3c-23.1,0-42,18.6-42.3,41.7c0,0.2,0,0.4,0,0.6v341.4c0,19.2,15.6,34.8,34.8,34.8h362.4c28.5,0,51.6-23.2,51.6-51.6v-69.8h11.6c15,0,27.2-12.2,27.2-27.2v-60.7C487.5,228.75,475.3,216.55,460.3,216.55z M42.3,58.55h309.4c5.9,0,10.8,4.8,10.8,10.7l-0.1,26H42.3c-10.1,0-18.3-8.2-18.3-18.3S32.2,58.55,42.3,58.55z M424.7,401.35c0,15.2-12.4,27.6-27.6,27.6H34.7c-5.9,0-10.8-4.8-10.8-10.8v-303.1c5.6,2.7,11.8,4.2,18.4,4.2h354.8c15.2,0,27.6,12.4,27.6,27.6v69.7h-81.9c-15,0-27.2,12.2-27.2,27.2v60.7c0,15,12.2,27.2,27.2,27.2h81.9V401.35z M463.5,304.45c0,1.8-1.4,3.2-3.2,3.2H342.9c-1.8,0-3.2-1.4-3.2-3.2v-60.7c0-1.7,1.4-3.2,3.2-3.2h117.4c1.7,0,3.2,1.4,3.2,3.2L463.5,304.45L463.5,304.45z" />
        </Svg>
        <Text style={styles.card}>Personal Account</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Text style={styles.idNum}>{Number}</Text>
    </View>
    {/* Add more sections if needed */}
  </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  amount: {
    marginRight: 15, // Pushes it to the right
    textAlign: "center", // Centers text within the available space
    paddingVertical: 1, // Add some vertical padding
  },
  currency: {
    color: "gold",
    fontSize: 15,
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  Line: {
    borderBottomWidth: 0.5,
    borderColor: "gold",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2a2b37",
  },
  boxOne: {
    padding: 10,
    color: "gold",
  },
  idNum: {
    marginLeft: 40,
  },
  card: {
    fontSize: 17,
    flex: 1, // Allow it to take up space
  },
  boxTwo: {
    color: "gold",
    marginLeft: 2,
    marginTop: 10,
  },
  boxThree: {
    color: "gold",
    marginRight: 30,
    marginTop: 10,
  },
  newSection: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 10,
    borderTopColor: "gold",
  },
  newSection1: {
    paddingTop: 5,
    marginRight: 15,
    marginLeft: 10,
    paddingBottom: 10,
    borderTopColor: "gold",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Add this line
  },
  newSectionText: {
    color: "gold",
    fontSize: 16,
  },
  accountContainer: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Distribute space between items
  },
});

export default Home;
