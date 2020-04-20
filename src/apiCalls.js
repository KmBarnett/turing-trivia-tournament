export const fetchQuestions = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  }
  catch(error) {
    console.error(error);
  }
}

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php')
    const data = await response.json()
    return data.trivia_categories
  } catch (err) {
    console.error(err.message)
  }
}
