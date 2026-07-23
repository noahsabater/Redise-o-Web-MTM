// Representantes comerciales por zona — datos literales de la web de referencia.

export interface Rep {
  region: string;
  name: string;
  phone: string;
  email: string;
}

export const reps: Rep[] = [
  { region: 'Galicia', name: 'Antonio Faraldo', phone: '670 676 188', email: 'deleco@deleco.es' },
  { region: 'Zona Norte', name: 'José Ángel Fernández', phone: '660 420 886', email: 'joseangelagentelibre@gmail.com' },
  { region: 'Extremadura', name: 'José Ángel Fernández', phone: '660 420 886', email: 'joseangelagentelibre@gmail.com' },
  { region: 'Aragón', name: 'José Ángel Fernández', phone: '660 420 886', email: 'joseangelagentelibre@gmail.com' },
  { region: 'Madrid', name: 'José Antonio Tiemblo', phone: '629 925 574', email: 'representadostiemblo@gmail.com' },
  { region: 'Catalunya', name: 'Xavier Lozano', phone: '669 771 997', email: 'xlozano@dropin.net' },
  { region: 'Zona Levante', name: 'Rubén Sabater', phone: '629 833 546', email: 'rubensabater@mtm-murcia.com' },
  { region: 'C. Valenciana', name: 'Roberto Ivorra', phone: '667 565 472', email: 'robertoivorra@gmail.com' },
  { region: 'Andalucía Oriental', name: 'Ignacio García Villalba', phone: '633 781 306', email: 'rpignaciogarcia@gmail.com' },
  { region: 'Andalucía Occidental', name: 'Rafael Giraldo', phone: '691 580 447', email: 'rafagiraldo@manchavaro.es' },
  { region: 'Baleares', name: 'Joan Pons Cardona', phone: '609 262 040', email: 'pinturasnito@terra.es' },
  { region: 'Canarias', name: 'Rubén Sabater', phone: '629 833 546', email: 'rubensabater@mtm-murcia.com' },
];
