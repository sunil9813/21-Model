import React, { useState } from "react"

export const Model = () => {
  const [model, setModel] = useState(false)

  const openModal = () => {
    setModel(true)
  }
  const closeModal = () => {
    setModel(false)
  }
  return (
    <>
      <main className={model ? "notShow" : "show"}>
        <button className='modelBtn' onClick={openModal}>
          NOTIFI !
        </button>
      </main>
      <div className={model ? "showModel showOverlay" : "notShow"}></div>
      <section className={model ? "showModel" : "notShow"}>
        <div className='modelContainer'>
          <h3>JOIN WITH US.</h3>
          <p>A perfect coming soon template creates a lasting impression on your website visitor.</p>

          <input type='text' placeholder='Enter Your Email' />
          <button className='btn2'>Subscribe!</button>
          <button className='closeModelBtn' onClick={closeModal}>
            <i className='fa fa-times'></i>
          </button>
        </div>
      </section>
    </>
  )
}
