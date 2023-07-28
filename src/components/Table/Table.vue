<script setup lang="ts">
import { ref, watch, computed, watchEffect, onBeforeMount } from "vue";
import { useRouter } from 'vue-router';

interface TableProps {
	columns: Array<string>;
	results: Record<string, unknown>;
}

const props = defineProps<TableProps>();
const router = useRouter();

const toSingle = (val: string) => {
	router.push(`/peoples/${val.split('/')[val.split('/').length - 2]}`);
}
</script>

<template>
	<table>
		<thead>
			<tr>
				<th v-for="column in props.columns">{{ column }}</th>
				<th>Add/Remove Favorite</th>
			</tr>
		</thead>
		<tbody>
			<tr 
				v-for="row in props.results"
			>
				<td 
					v-for="(value, name) in row"
					:class="{ 'hidden': !props.columns.find(element => element === name) }"
					@click="toSingle(row['url'])"
					>{{ value }}</td>
				<td style="width: 80px;">
					<button>Add</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss" scoped>
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

	tbody {
		tr {
			&:hover {
				background-color: rgba(0, 0, 0, 0.25);
				cursor: pointer;
			}
		}
	}

	.hidden {
		display: none;
	}
</style>
