import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'
import { AppBar, Collapse, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Info from './Info'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:0,
  },
  container: {
    textAlign: 'center',
  },
  title :{
    padding: '35vh 0 0 0',
    color:'#000000',
    fontSize: '3rem',
    
  },
  Text :{
    color: '#9ccc65',
  },
  icon: {
    color: '#000000',
    padding: '8vh 0 40vh 0',
    fontSize: '4rem',
  }
}))

export default function Home(){
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [checked, setChecked] = useState(false);
  
  useEffect(()=>{
    setChecked(true);
  })
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

    return (
    <div>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to <br /> <span className={classes.Text}>Freshmart.</span>
            </h1>
            <IconButton>
              <ExpandMoreIcon className={classes.icon} />
            </IconButton>
          </div>
        </Collapse>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8}>
            <Search categories={categories} />
            <Categories categories={categories} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Suggestions products={suggestions} title={suggestionTitle} />
          </Grid>
        </Grid>
        <Info />

      </div>
    )
}


