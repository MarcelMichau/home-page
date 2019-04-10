import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

const StyledTable = styled.table`
	table-layout: fixed;
	width: 100%;
	border: 1px solid ${darken(0.5, 'white')};
	border-collapse: collapse;

	th {
		color: ${props => lighten(0.45, props.theme.accentColour)};
	}

	tr {
		border: 1px solid ${darken(0.5, 'white')};
	}

	td {
		padding: 10px;
	}
`;

const Table = ({ rows, headers }) => (
	<StyledTable>
		<thead>
			<tr>
				{headers.map((header, index) => (
					<th key={index}>{header}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows.map((row, index) => (
				<tr key={index}>
					{row.map((column, index) => (
						<td key={index}>{column}</td>
					))}
				</tr>
			))}
		</tbody>
	</StyledTable>
);

export default Table;
