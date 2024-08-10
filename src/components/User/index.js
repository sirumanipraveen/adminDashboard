import NavigationBar from '../NavigationBar'
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class User extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <>
        <NavigationBar />
        <h1 className="headingg">Users Details</h1>
        <p className="paragraph">
          What does Alphabet do? Alphabet Inc was created in 2015, after Google
          reorganised its businesses to make its activities "cleaner and more
          accountable". Waymo. Waymo started in 2009 as a Google project to
          build a self-driving car. It is now run as a separate company under
          Alphabet. Waymo's cars feature sensors to detect pedestrians. Calico.
          Google launched its health-focused research and development company in
          2013, with Larry Page announcing in a blog post that its work would be
          based around the research areas of "health and well-being, in
          particular the challenge of ageing and associated diseases". Sidewalk
          Labs. Sidewalk Labs is focused on smart cities, and explores how
          data-gathering sensors can be used to manage crowds and traffic. In
          October, it was given the green light to create a "smart city" in a
          disused area of Toronto, Canada.
        </p>
        <div className="blog-list-container">
          {isLoading ? (
            <div className="loadingg">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
          )}
        </div>
      </>
    )
  }
}

export default User
