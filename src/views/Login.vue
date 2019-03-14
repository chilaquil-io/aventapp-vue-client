<template>
  <div>
    <sign-in></sign-in>
    <role-decision-dialog></role-decision-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/Layout.vue';
import SignIn from '@/components/SignIn.vue';
import RoleDecisionDialog from '@/components/RoleDecisionDialog.vue';

export default {
  name: 'Login',
  created() {
    this.$emit('update:layout', Layout);
  },
  components: {
    'sign-in': SignIn,
    'role-decision-dialog': RoleDecisionDialog,
  },
};
</script>

<style scoped>

</style>
