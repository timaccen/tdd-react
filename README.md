# Test Driven Development with React

TDD with React App.

In the first iteration, the anagram challenge initial steps are fleshed out.

# TDD Notes


## Jest & the testing library

Jest
- lets you access the DOM and mocking functions so you have more control over how the code executes

React Testing Library
- provides tools to test and render hooks without getting into implementation details.

## Describe vs. test

The example Rumble fish test uses describe/it:

```javascript
describe(‘useTextField hook’, () => {
    it(‘checking default state’, () => {
        const { result } = renderHook(() => useTextField())
        expect(result.current.value).toBe(‘’)
        expect(result.current.onChange).toBeInstanceOf(Function)
    })
})
```

This  compiles also:

```javascript
test("checking default state", () => {
  const { result } = renderHook(() => useAnagrams(""));
  expect(result.current.values).toBe("");
});
```

## value vs values

The example code:

expect(result.current.value).toBe("");

Has the error:

Property 'value' does not exist on type 'any[]'. Did you mean 'values'?ts(2551)
lib.es2015.iterable.d.ts(75, 5): 'values' is declared here.

Using 'values' instead of 'value' fails with the message:

```err
expect(received).toBe(expected) // Object.is equality
Expected: ""
Received: [Function values]
```

If I console log out the result:

console.log result { current: [ '', [Function: updateAnagream] ] }

It seems like this should work, but it doesn't:

expect(result.current.values[0]).toBe("");

This means we need to look in detail at the renderHook method from the React Hooks Testing Library.

Result holds the value of the return value of the render callback.

The official docs show this:

```javascript
const {result} = renderHook(() => {
	const [name, setName] = useState('')
	React.useEffect(() => {
		setName('Alice')
	}, [])
})
```

Do the internals of the anagrams hook need to be somewhat repeated in there?

Actually, it's simpler than that.  Since values is an IterableIterator such as a map, this will work to get the first value:

```javascript
expect(result.current.values().next().value).toBe("");
```

Then, the first hooks test passes.  Bravo!~

Not sure how to test the existence of a function:

expect(result.current.updateAnagram).toBeInstanceOf(Function)

That's not going to work.  Have to leave it for later.  The default value above will work for now.

## Update anagrams hook test

After testing the default value, we want to create a test which  calls the updateAnagram() function.

For this we use the act() method from React Hooks Testing Library.

```javascript
act(() => {
	result.current.updateAnagram({ target: { value: "ab ba" } });
});
```

Property 'updateAnagram' does not exist on type 'any[]'.

Result.current = [ '', [Function: updateAnagram] ]

Trying this seems like it should work:

```javascript
act(() => {
	result.current[1].updateAnagram("ab");
});
```

As this: console.log("result.current[1]", result.current[1]);

Outputs: [Function: updateAnagram]

But it gives this runtime error;

TypeError: result.current[1].updateAnagram is not a function

## Original Readme

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
