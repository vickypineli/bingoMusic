import '../App.css';
import PropTypes from 'prop-types';

const TableNumbers = ({ calledNumbers }) => {
  const numbers = Array.from({ length: 90 }, (_, index) => index + 1); // Array de números del 1 al 90


  function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  }
  
return (
        <div className="table-numbers">
            <table>
                <tbody>
                    {chunk(numbers, 10).map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {row.map(cellNumber => (
                                    <td key={cellNumber} className={calledNumbers.includes(cellNumber) ? 'highlighted' : ''}>
                                        {cellNumber}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

};
TableNumbers.propTypes = {
    calledNumbers: PropTypes.array.isRequired // Define la validación para la prop 'calledNumbers'
};

export default TableNumbers;


