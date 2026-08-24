import React from 'react';

const PricingTable = ({ type, data }) => {
  if (!data || data.length === 0) return null;

  if (type === 'simple') {
    return (
      <div className="pricing-table-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th className="pricing-th w-2/3">Concepto</th>
              <th className="pricing-th w-1/3 text-right">Valor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="pricing-tr">
                <td className="pricing-td font-medium text-foreground">{row.concepto}</td>
                <td className="pricing-td text-right font-semibold text-primary">{row.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'tiered') {
    return (
      <div className="pricing-table-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th className="pricing-th">Plan</th>
              <th className="pricing-th text-right">Desde</th>
              <th className="pricing-th text-right">Hasta</th>
              <th className="pricing-th text-right">Cargo Base</th>
              <th className="pricing-th text-right">Valor por Factura</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="pricing-tr">
                <td className="pricing-td font-medium text-foreground">{row.plan}</td>
                <td className="pricing-td text-right">{row.desde}</td>
                <td className="pricing-td text-right">{row.hasta}</td>
                <td className="pricing-td text-right font-medium">{row.cargoBase}</td>
                <td className="pricing-td text-right text-primary">{row.valorFactura}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default PricingTable;