import React, { useEffect, useState } from 'react'

const initialItems = [
    { id: 1, label: "Item One" },
    { id: 2, label: "Item Two" },
    { id: 3, label: "Item Three" },
    { id: 4, label: "Item Four" }
];

const DragDropList = () => {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('dragItems');
        return saved ? JSON.parse(saved) : initialItems;
    });

    const [dargIndex, setDragIndex] = useState('');

    const onDragStart = (index) => {
        setDragIndex(index);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (index) => {
        const updateItems = [...items];
        const draggedItem = updateItems.splice(dargIndex, 1)[0];
        updateItems.splice(index, 0, draggedItem);
        setItems(updateItems);
        setDragIndex(null);
    };


    //keyboard Accesibility

    const onKeyDown = (e, index) => {
        if (e.key === 'ArrowUp' && index > 0) {
            moveItem(index, index - 1);
        }

        if (e.key === 'ArrowDown' && index < items.length - 1) {
            moveItem(index, index + 1);
        }

    };

    const moveItem = (from, to) => {
        const updated = [...items];
        const item = updated.splice(from, 1)[0];
        updated.splice(to, 0, item);
        setItems(updated);
    };



    useEffect(() => {
        localStorage.setItem('dragItems', JSON.stringify(items));
    }, [items]);


    return (
        <ul>
            {
                items.map((item, index) => {
                    return (
                        <li
                            key={item.id}
                            draggable
                            tabIndex={0}
                            onDragStart={() => onDragStart(index)}
                            onDragOver={onDragOver}
                            onDrop={() => onDrop(index)}
                            onKeyDown={(e) => onKeyDown(e, index)}
                            style={{
                                padding:'12px',
                                marginBottom:'8px',
                                border:'1px solid #ccc',
                                cursor:'move',
                                background:'#fafafa'
                            }}
                            aria-grabbed={dargIndex === index}
                        >
                            {item.label};

                        </li>
                    )
                })

            }
        </ul>
    )
}

export default DragDropList;