const makeTranslate = (axis: 'X' | 'Y', distance: number): string => {
  return `translate${axis}(${distance}px)`
}

export default makeTranslate
