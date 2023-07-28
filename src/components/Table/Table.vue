<template>
	<table>
		<thead>
			<tr>
				<th>Column 1</th>
				<th>Column 2</th>
				<th>Column 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Row 1, Cell 1</td>
				<td>Row 1, Cell 2</td>
				<td>Row 1, Cell 3</td>
			</tr>
			<tr>
				<td>Row 2, Cell 1</td>
				<td>Row 2, Cell 2</td>
				<td>Row 2, Cell 3</td>
			</tr>
		</tbody>
	</table>
</template>

<style>
	table {
			width: 100%;
			border-collapse: collapse;
	}

	th, td {
			border: 1px solid #ccc;
			padding: 8px;
			text-align: left;
	}

	th {
			background-color: #f2f2f2;
	}

	tr:nth-child(even) {
			background-color: #f2f2f2;
	}
</style>
