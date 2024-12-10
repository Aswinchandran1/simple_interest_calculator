
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if (name == 'principle') {
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidPrinciple(false)
      } else {
        setinvalidPrinciple(true)
      }
    } else if (name == 'rate') {
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidRate(false)
      } else {
        setInvalidRate(true)
      }
    } else if (name == 'year') {
      setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidYear(false)
      } else {
        setInvalidYear(true)
      }
    }
  }

  const handleCalculate = (event) => {
    event.preventDefault()
    if (principle && rate && year) {
      setInterest(principle * rate * year / 100)
      console.log(interest);

    } else {
      alert("Please fill the form completly")
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }
  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate Your Simple Interest Easily</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>

          <form className='mt-5'>
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>*Invalid Principle Amount</div>}

            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {invalidRate && <div className='text-danger fw-bolder mb-3'>*Invalid Rate of interst</div>}

            <div className='mb-3'>
              <TextField value={year || ""} name='year' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
            </div>
            {invalidYear && <div className='text-danger fw-bolder mb-3'>*Invalid time period</div>}

            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} className='bg-dark' variant="contained" style={{ width: '50%', height: '70px' }}>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }}>Reset</Button>
            </Stack>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
