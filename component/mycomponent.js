export default {
    data() {
        return {
            selectedSede: '',
            nombre: '',
            telefono: '',
            teams: '',
            dias: '',
            salon: '',
            barrio: '',
            nivel: '',
            email: '',
            piso: '',
            num_salon: '',

            profesores: [],
            estudiantes: [],

            campus: {
                sedes: [
                    {
                        name: 'Bucaramanga',
                        phone: '+1 123-456-7890',
                        direccion: 'Cr1',
                        email: 'Bucaramanga@gmail.com'
                    },
                    {
                        name: 'Bogota',
                        phone: '+57 315 745 471',
                        direccion: 'Cr2',
                        email: 'Bogota@gmail.com'
                    },
                    {
                        name: 'Mexico',
                        phone: '+52 123-456-7890',
                        direccion: 'Cr3',
                        email: 'Mexico@gmail.com'
                    }
                ],
                


            }
        }
    },
    methods: {
        getPhone(sedeName) {
            const sede = this.campus.sedes.find(sede => sede.name === sedeName);
            return sede.phone;
        },
        getDireccion(sedeName) {
            const sede = this.campus.sedes.find(sede => sede.name === sedeName);
            return sede.direccion;
        },
        getEmail(sedeName) {
            const sede = this.campus.sedes.find(sede => sede.name === sedeName);
            return sede.email;
        },

        agregarProfesor() {
            this.profesores.push({
                nombre: this.nombre,
                telefono: this.telefono,
                teams: this.teams,
                dias: this.dias,
                salon: this.salon
            })
            this.nombre = ''
            this.telefono = ''
            this.teams = ''
            this.dias = ''
            this.salon = ''
        },

        agregarEstudiante() {
            this.estudiantes.push({
                nombre: this.nombre,
                telefono: this.telefono,
                teams: this.teams,
                dias: this.dias,
                salon: this.salon,
                barrio: this.barrio,
            })
            this.nombre = ''
            this.telefono = ''
            this.teams = ''
            this.dias = ''
            this.salon = ''
            this.barrio = ''

        }

    }
}
