
### 🗓️ mm_dd_yy_to_yy_dd_mm Function Implementation

Here's how you can implement the `mm_dd_yy_to_yy_dd_mm` function to convert a date string from the format **mm-dd-yy** to **yy-dd-mm**.

```python
def mm_dd_yy_to_yy_dd_mm(date: str) -> str:
    """
    Convert a date string from the format mm-dd-yy to yy-dd-mm.

    Args:
        date (str): The date in the format "mm-dd-yy".

    Returns:
        str: The date in the format "yy-dd-mm".

    Example:
        >>> mm_dd_yy_to_yy_dd_mm("12-25-21")
        "21-25-12"
    """
    mm, dd, yy = date.split('-')
    return f"{yy}-{dd}-{mm}"
```


#### 🐍 Step-by-Step Explanation

1. **Split the String:**
The `split('-')` method divides the input string into three parts: `"mm"`, `"dd"`, and `"yy"`.
2. **Unpack and Rearrange:**
Assign these parts to `mm`, `dd`, and `yy`.
Then, use an f-string to rearrange them into `yy-dd-mm`.
3. **Return the Result:**
The function returns the reformatted date string.

#### 💡 Example Usage

- **Input:** `"12-25-21"`
- **Output:** `"21-25-12"`

```python
print(mm_dd_yy_to_yy_dd_mm("12-25-21"))  # Output: 21-25-12
```


### 📚 Practice Questions

1. What will `mm_dd_yy_to_yy_dd_mm("04-01-99")` return?
2. Try `mm_dd_yy_to_yy_dd_mm("11-30-00")`
3. What if the input is `"07-04-76"`?

### ✅ Solutions

1. `"99-01-04"`
2. `"00-30-11"`
3. `"76-04-07"`

### 🚩 Note

If the input is not in the expected `"mm-dd-yy"` format (for example, missing dashes or incorrect number of components), the function will raise a `ValueError`.

This simple function lets you easily swap between date formats in your Python code! 🐍✨

