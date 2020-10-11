import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimplePage extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hi, I am your restaurant search assistant,Resto,What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! How is your day going?',
              trigger: '4',
            },
            {
              id:'4',
              user: true,
              trigger:'6',
            },
            {
              id:'6',
              message: 'I am pleased to know that!! ',
              trigger:'8',
            },
            // {
            //   id:'7',
            //   user:true,
            //   trigger:'8',
            // },
            {
              id: '8',
              message: 'Select the city you want to view your restaurants',
              trigger: 'location',
            },
            {
              id: 'location',
              options: [
                { value: 'pune', label: 'Pune', trigger: '7' },
                { value: 'bangalore', label: 'Bangalore', trigger: '7' },
                { value: 'delhi', label: 'Delhi', trigger: '7' },
                { value: 'chennai', label: 'Chennai', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'Great! Check out!! ',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update your location?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'thanks' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'pune', label: 'Pune', trigger: 'review' },
                { value: 'bangalore', label: 'Bangalore', trigger: 'review' },
                { value: 'delhi', label: 'Delhi', trigger: 'review' },
                { value: 'chennai', label: 'Chennai', trigger: 'review' },
                {value: 'I have found what I was looking for',label:'I have found what I was looking for', trigger:'thanks'},
              ],
            },
            {
              id: 'thanks',
              message:'I am glad I was helpful, See you soon,Bye',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimplePage;
