
# Priority Order for Queries

Tests should resemble how users interact with your code (component, page)

1 - getByRole - This is used to query every element that is exposed to the accessibility tree

2 - getByLabelText - really good for form fields

3 - getByPlaceholderText -

4 - getByText - It can be used to find non-interactive elements like div's, spans and paragraphs

5 - getByDisplayValue

6 - getByAltText

7 - getByTitle

8 - getByTestId



# Pointer Interactions

`Convenience API`

Convenience APIs are a higher level APIs that provide a simpler and more abstracted interface for 
simulating common user interactions. 

click(), dblClick() and tripleClick is not a pointer API, it is a convenient API that calls the pointer APIs
hover() and unhover()
Convenience APIs are used when writing tests
tab()

# Pointer APIs

Pointer APIs are low-level APIs that allow you to simulate pointer events such as mouse clicks,
touch events, and drag-and-drop interactions.

Examples:
pointer({keys: '[Mouse-Left]'})
it accepts an obj as args and specifies the key property
pointer({keys: '[Mouse-Left][mouse-right]'})
pointer( '[Mouse-Left][mouse-right]')

Convenience APIs are generally less precise than Pointer APIs, but they are faster and easier to use.


# Utility API

type()
clear()
selectOptions()
deselectOptions()
upload()

# Clipboard APIs

copy()
cut()
paste()