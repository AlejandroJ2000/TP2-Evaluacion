class FacturasModel {
    constructor() {
        this.facturas = []
        this.nextId = 1
    }

    getFacturas = async () => {
        return this.facturas
    }

    postFacturas = async (newFactura) => {
        const factura = {
            id: this.nextId++,
            ...newFactura
        }
        this.facturas.push(factura)
        return factura
    }

    getFacturasPorTipo = async (tipo) => {
        return this.facturas.filter(factura => factura.tipo === tipo)
    }

    getFacturasPorEstado = async (estado) => {
        return this.facturas.filter(factura => factura.estado.toLowerCase() === estado.toLowerCase())
    }
}
export default FacturasModel