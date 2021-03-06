import React from 'react';
import {
  TouchableOpacity
} from 'react-native'
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import {
  loginContainer,
  signupContainer,
  profile,
  messages,
  myCourses,
  courses,
  trialCourses,
  welcomeScreen,
  buyCoursesContainer
} from './containers';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Icons } from './common';

const Courses = StackNavigator({
  course: {
    screen: courses,
    navigationOptions: {
      title: 'Courses',
      headerStyle: {
        backgroundColor: '#fff'
      }

    }
  }
})

const MyCourses = StackNavigator({
  myCourses: {
    screen: myCourses,
    navigationOptions: {
      title: 'My Courses',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})
const Profile = StackNavigator({
  profile: {
    screen: profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})
const Messages = StackNavigator({
  messages: {
    screen: messages,
    navigationOptions: {
      title: 'Messages',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
})

const Tabs = TabNavigator({
  Courses: {
    screen: Courses,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.course} size={25} color={tintColor} />
    }
  },
  Mycourses: {
    screen: MyCourses,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.mycourses} size={20} color={tintColor} />
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.messages} size={25} color={tintColor} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.profile} size={25} color={tintColor} />
    }
  }
})

const backAction = NavigationActions.back({
  key: ''
})

const TrailCourse = StackNavigator({
  TrailCourse: {
    screen: trialCourses,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerLeft:
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.dispatch(backAction)}>
        <IonIcons name={Icons.back} size={35} color='#000' />
      </TouchableOpacity>

    })
  }
})

const BuyCourses = StackNavigator({
  BuyCourses: {
    screen: buyCoursesContainer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerLeft:
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.dispatch(backAction)}>
        <IonIcons name={Icons.back} size={35} color='#000' />
      </TouchableOpacity>
    })
  }
})

const AppRouter = StackNavigator({

  Tabs: {
    screen: Tabs
  },
  TrialCourses: {
    screen: TrailCourse
  },
  BuyCourses: {
    screen: BuyCourses
  },
  WelcomeScreen: {
    screen: welcomeScreen
  },
},
  {
    headerMode: 'none'
  })
export default AppRouter;