
### 🔎 Function: Find Last Word Starting with Uppercase

Here's how you can implement the `last_word_starts_with_upper_case` function to find the **last word in a sentence that starts with an uppercase letter**. If no such word exists, it returns `None`.

#### 🛠️ Function Definition

```python
def last_word_starts_with_upper_case(sentence: str):
    """
    Find the last word in a sentence that starts with an uppercase letter.

    Args:
        sentence (str): The input sentence.

    Returns:
        str or None: The last word starting with an uppercase letter, or None if no such word exists.
    """
    result = None
    for word in sentence.split():
        if word and word[0].isupper():
            result = word
    return result
```


#### ✨ Step-by-Step Explanation

- **Step 1:** Split the sentence into individual words using `split()`.
- **Step 2:** Loop through each word:
    - If the word starts with an uppercase letter (`word.isupper()`), save it as the current result.
- **Step 3:** After checking all words, return the last word found that met the criteria, or `None` if none did.


#### 🚦 Example Usage

```python
print(last_word_starts_with_upper_case("This is a Test sentence"))  # Output: "Test"
print(last_word_starts_with_upper_case("no uppercase words here"))  # Output: None
```


#### 📝 Practice Questions

1. What will `last_word_starts_with_upper_case("Alice and Bob went to Paris")` return?
2. Try `last_word_starts_with_upper_case("all lowercase words")`.
3. What is the result of `last_word_starts_with_upper_case("Python Is Easy To Learn")`?

#### ✅ Solutions

1. `"Paris"`
2. `None`
3. `"Learn"`

With this function, you can quickly scan sentences for the last word that begins with a capital letter. Perfect for text analysis and simple parsing tasks! 🐍💡

