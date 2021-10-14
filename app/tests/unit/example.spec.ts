import 'jest';
import { shallowMount } from '@vue/test-utils'
import ContactList from '@/components/ContactList.vue'

describe('ContactList.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ContactList, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});