/*
  returns a chunk of text
*/

function grouper(
	items,  // array of items to iterate over
	render, // function to render each line - returns an array which must have an odd number of elements
	counter // bool, wether we inject counter data into the item
) {
	var arraySize = -1,
		html = '',
		item, c, d, last,
		current, halfSize,
		lastMatchDepth, matchDepth;

	// first find the size of the array returned
	current = render(items[0]);
	arraySize = current.length;
	halfSize = (arraySize + 1) / 2;

	lastMatchDepth = 1;
	matchDepth = halfSize;

	for (c in items ) { 
		item = items[c];
		current = render(item);

		// how deep does it match the last row?
		// if it doesn't match in same way, close the previous bits of the last row
		if (last) { 
			matchDepth = 0;
			for (d = 0; d <= halfSize; d++) {
				if (last[d] === current[d]) {
					matchDepth++;
				}
			}
		}
		if (last && matchDepth < lastMatchDepth) { 
			html += last.slice(arraySize - lastMatchDepth+1, arraySize - matchDepth + 1).join('');
			html += current.slice(matchDepth - 1, halfSize).join('');
			matchDepth = halfSize;
		} else {
			html += current.slice(lastMatchDepth - 1, matchDepth).join('');
		}

		last = current;
		lastMatchDepth = matchDepth; 
	}
	html += current.slice(matchDepth, arraySize).join('');

	return html;

}


