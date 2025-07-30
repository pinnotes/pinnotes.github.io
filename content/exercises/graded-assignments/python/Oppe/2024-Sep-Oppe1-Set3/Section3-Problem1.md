
### 📝 Filter Words by Custom Criteria

Below is the requested function to filter a list of words based on one of four criteria: **continuous**, **vowel_rich**, **consonant_rich**, or **sorted**. Words are checked case-insensitively, and helper functions are included for each criteria.

```python
def filter_words(words, criteria):
    """
    Filters a list of words based on the given criteria.

    Args:
        words (list of str): Input list of words.
        criteria (str): One of 'continuous', 'vowel_rich', 'consonant_rich', 'sorted'.
    
    Returns:
        list or None: Filtered list based on criteria, or None if invalid.

    Criteria:
        • 'continuous': words ending with 'ing' (case-insensitive)
        • 'vowel_rich': words with more than 5 vowels
        • 'consonant_rich': words with more than 5 consonants
        • 'sorted': words whose letters are in ascending order (case-insensitive)
    """

    def is_continuous(word):
        return word.lower().endswith('ing')

    def count_vowels(word):
        return sum(1 for ch in word.lower() if ch in "aeiou")

    def count_consonants(word):
        return sum(1 for ch in word.lower() if ch.isalpha() and ch not in "aeiou")

    def is_sorted(word):
        letters = [ch.lower() for ch in word if ch.isalpha()]
        return letters == sorted(letters)

    if criteria == 'continuous':
        return [w for w in words if is_continuous(w)]
    elif criteria == 'vowel_rich':
        return [w for w in words if count_vowels(w) > 5]
    elif criteria == 'consonant_rich':
        return [w for w in words if count_consonants(w) > 5]
    elif criteria == 'sorted':
        return [w for w in words if is_sorted(w)]
    else:
        return None
```


#### ✨ Step-by-Step Explanation

1. **Helper Functions:**
    - `is_continuous`: Checks if the word ends with "ing" (case-insensitive).
    - `count_vowels`: Counts vowels (a, e, i, o, u).
    - `count_consonants`: Counts consonants (alphabetic letters that are not vowels).
    - `is_sorted`: Checks if the letters of the word are in ascending order.
2. **Criteria Check:**
    - The function checks the `criteria` argument and applies the relevant helper.
    - If an unknown criteria is given, returns `None`.

#### 🧪 Practice Questions

Try calling the function on the following list:

```python
words = ["running", "aeiobcdioe", "acc", "xyz", "BOTbot", "BboOTt", "jumpiNg", "SPINNING", "alphabetical"]
```

- What does `filter_words(words, "continuous")` return?
- What does `filter_words(words, "vowel_rich")` return?
- What about `filter_words(words, "consonant_rich")`?
- And `filter_words(words, "sorted")`?
- What happens for `filter_words(words, "random")`?


#### ✅ Solutions

- **continuous:**
`['running', 'jumpiNg', 'SPINNING']`
- **vowel_rich:**
`['aeiobcdioe']`
- **consonant_rich:**
`['SPINNING', 'alphabetical']`
- **sorted:**
`['acc', 'xyz', 'BboOTt']`
- **random:**
`None`

🚀 Use these helpers to build your own powerful word filters!


