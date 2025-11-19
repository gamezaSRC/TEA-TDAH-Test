import { SNAPIV_Ninos } from './tests/tdah_ninos.js';
import { ASRS_Adultos } from './tests/tdah_adultos.js';
import { SCQ_TodaLaVida } from './tests/scq_todalavida.js';
import { SCQ_Actual } from './tests/scq_actual.js';
//import { AQ50 } from './tests/aq50.js';

const tests = {
  tdah_ninos: { obj: SNAPIV_Ninos, target: ['child', 'teen'], label: 'TDAH' },
  tdah_adultos: { obj: ASRS_Adultos, target: ['adult'], label: 'TDAH' },
  scq_vida: { obj: SCQ_TodaLaVida, target: ['child'], label: 'TEA (Toda la vida)' }, // para el test clásico (lo que todo el mundo usa la primera vez)
  scq_actual: { obj: SCQ_Actual, target: ['child'], label: 'TEA (Situacion Actual)' }, // para ver si ha habido mejoría o empeorado después de terapia, medicación, etc.
  //aq50: { obj: AQ50, target: ['child'], label: 'TEA' }
};

const ageSelector = document.getElementById('ageSelector');
const testSelectorContainer = document.getElementById('testSelectorContainer');
const testSelector = document.getElementById('testSelector');
const container = document.getElementById('testContainer');

ageSelector.addEventListener('change', () => {
  const selectedAge = ageSelector.value;
  testSelector.innerHTML = '<option value="">-- Selecciona un cuestionario --</option>';
  container.innerHTML = '';
  document.getElementById('result').style.display = 'none';

  if (selectedAge) {
    Object.entries(tests).forEach(([key, test]) => {
      if (test.target.includes(selectedAge)) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = test.label;
        testSelector.appendChild(opt);
      }
    });
    testSelectorContainer.style.display = 'block';
  } else testSelectorContainer.style.display = 'none';
});

testSelector.addEventListener('change', () => {
  const selectedKey = testSelector.value;
  const selectedAge = ageSelector.value;
  container.innerHTML = '';
  document.getElementById('result').style.display = 'none';
  if (selectedKey && tests[selectedKey])
    tests[selectedKey].obj.render(container, selectedAge);
});


