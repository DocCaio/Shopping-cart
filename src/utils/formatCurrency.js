const formatCurrency = (value , currency) => {

  return (
   value.toLocaleString('pr-br', {
      style:'currency',
      currency,
    })
  )

}

export default formatCurrency;
