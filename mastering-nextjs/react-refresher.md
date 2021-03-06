# React refresh.

Rendering out the most basic react component we can get with jsx.

<br>

>```...this.state.items``` Effectively copying the state instead of mutating tha orig.

</br>

**Class Component.**

```jsx
import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
            </ul>
        )
    }
}


export default List
```

**Functional Component.**
implicit returns and no problems with ```this``` keyword

```jsx

const List = () => (
    <ul>
        <li>asd</li>
        <li>asd</li>
        <li>asd</li>
    </ul>
);

export default List
```

**Props.**

```jsx

const List = (props) => (
    <ul>
        {props.items.map((item) => (
            <li key={item}> {item} </li>

        ))}
    </ul>
);

const ListContainer = () => <List items={['item 1', 'item 2']} />

export default List
```

**Props with Destructuring (ES6).**

```jsx

// This is what props look like

// {
//     items: []
// }

// so from the props being passed in, give me the props['items'] effectively.

const List = ({items}) => (
    <ul>
        {items.map((item) => (
            <li key={item}> {item} </li>

        ))}
    </ul>
);

const ListContainer = () => <List items={['item 1', 'item 2']} />

export default List
```

**Hooks**

```jsx

const List = ({items}) => {
    const [filteredItems, setfilteredItems] = React.useState(items)

    const filterItems = (e) => {
        const searchValue = e.target.value;
        const currentItems = [...items];
        const matchingItems = currentItems.filter((item) => item.startswith(searchValue));

        setFilteredItems(matchingItems)
    }

    return (
        <>
            <input onChange={this.filterItems}/>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item}> {item} </li>

                ))}
            </ul>
        </>
    )


};

const ListContainer = () => <List items={['item 1', 'item 2']} />

export default List
```

**Rest Spread**

```jsx

const List = ({items, ...props}) => {
    const [filteredItems, setfilteredItems] = React.useState(items)

    const filterItems = (e) => {
        const searchValue = e.target.value;
        const currentItems = [...items];
        const matchingItems = currentItems.filter((item) => item.startswith(searchValue));

        setFilteredItems(matchingItems)
    }

    return (
        <>
            <input onChange={this.filterItems}/>
            <ul {...props}>
                {filteredItems.map((item) => (
                    <li key={item}> {item} </li>

                ))}
            </ul>
        </>
    )


};

const ListContainer = () => <List aria-label="My Fancy List" items={['item 1', 'item 2']} />

export default List
```

