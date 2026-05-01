import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {users} from './userContactInfo'
import ContactItem from "../../components/ContactItem";

const ContactList = () => {
    const show = ({item})=>(
        <ContactItem data={item} />
    ) 
  return (
    <FlatList data={users} renderItem={show} keyExtractor={item=> item.id} />
  )
}

export default ContactList